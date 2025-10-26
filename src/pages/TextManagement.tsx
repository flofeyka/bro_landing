import React, {useMemo} from "react";
import {Language, type Text, useGetTextsQuery, useUpdateTextMutation} from "../lib/api/textApi";
import Pagination from "../components/ui/Pagination";
import Modal from "../components/ui/Modal.tsx";
import Input from "../components/ui/Input.tsx";
import Button from "../components/ui/Button.tsx";
import {toast} from "react-toastify";

function TextManagement() {
    const [page, setPage] = React.useState<number>(1);
    const [limit, setLimit] = React.useState<number>(20);
    const [search, setSearch] = React.useState<string>("");
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [editingMessage, setEditingMessage] = React.useState<string | null>(null);
    const [editValue, setEditValue] = React.useState<string>('');

    const {data: textsArray, isLoading: loading, refetch: fetchTexts} = useGetTextsQuery({
        page, limit, search,
    });
    const [updateText, {isLoading: isUpdatingText}] = useUpdateTextMutation()

    const {texts, total} = useMemo(() => textsArray || {texts: [], total: 0}, [textsArray]);
    const currentEditingMessage = React.useMemo<Text | undefined>(() => texts.find(text => text.id === editingMessage), [texts, editingMessage]);

    const getPreviewText = (content: string) => {
        return content.length > 50 ? content.substring(0, 50) + "..." : content;
    };

    const editMessage = React.useCallback((id: string) => {
        setIsOpen(true);
        setEditingMessage(id);
    }, []);

    const handleUpdateText = React.useCallback(async (code: string, value: string, language: Language) => {
        await updateText({code, value, language});
        setIsOpen(false);
        setEditValue('');
        setEditingMessage(null);
        toast('Текст успешно обновлен!', {type: 'success'})
        await fetchTexts();
    }, [updateText]);

    const resetMessage = React.useCallback((id: string) => {
        console.log("Удалить сообщение:", id);
    }, []);

    React.useEffect(() => {
        if (currentEditingMessage?.value) {
            setEditValue(currentEditingMessage.value);
        }
    }, [currentEditingMessage?.value]);

    return (<div className="p-6 max-w-7xl mx-auto space-y-5">

        {currentEditingMessage &&
            <Modal className={'flex flex-col space-y-5 w-[40vw] justify-between h-full'} title={'Редактирование'}
                   open={isOpen}
                   onOpenChange={setIsOpen}>
                <main className={'h-full space-y-3'}>
                    <Input label={'Имя'} disabled value={currentEditingMessage.code}/>
                    <Input label={'Значение'} value={editValue}
                           onChange={(e) => setEditValue(e.target.value)}/>
                    <Input label={'Язык'} disabled value={currentEditingMessage.language}/>
                </main>

                <Button className={'w-[200px] ml-auto block'} disabled={isUpdatingText}
                    onClick={() => handleUpdateText(currentEditingMessage.code, editValue, currentEditingMessage.language)}>{isUpdatingText ? 'Загрузка...' : 'Применить' }</Button>
            </Modal>}

        <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Сообщения бота</h1>
            <p className="text-lg text-gray-600">
                Здесь отображаются все сообщения, полученные от бота.
            </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-md mb-6">
            <div className="flex gap-4 items-center flex-wrap">
                <div className="flex-1 min-w-[250px]">
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Поиск по ключу или содержимому..."
                        type="text"
                    />
                </div>

                <div>
                    <select
                        // value={selectedLocale}
                        // onChange={(e) => setSelectedLocale(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Все языки</option>
                        <option value="ru">Русский</option>
                        <option value="en">English</option>
                    </select>
                </div>

                <button
                    className={`px-6 py-2 border rounded-lg text-sm font-medium transition-all ${loading ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}`}
                    disabled={loading}
                    // onClick={loadMessages}
                >
                    {loading ? <span>Загрузка...</span> : <span>Обновить</span>}
                </button>
            </div>
        </div>

        {/* Статус загрузки */}
        {loading ? (<div className="flex items-center justify-center py-16 gap-3 text-gray-600">
            <div className="w-6 h-6 border-2 border-gray-200 border-t-2 rounded-full animate-spin"></div>
            <span>Загрузка сообщений...</span>
        </div>) : null}

        {/* Пустое состояние */}
        {texts?.length === 0 && !loading ? (<div className="text-center py-16 px-5 text-gray-600">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl text-gray-800 mb-2">
                Сообщения бота не найдены
            </h3>
            <p className="text-sm">
                Здесь должны отображаться реальные сообщения из handlers.
                <br/>
                Попробуйте сбросить фильтры или проверьте API подключение.
            </p>
        </div>) : null}

        {/* Список сообщений */}
        {(texts?.length || 0) > 0 && !loading ? (<div className="grid gap-4">
            {texts.map((message: Text) => (<div
                key={`${message.code}-${message.language}`}
                className="bg-white border border-gray-200 rounded-lg p-5 transition-all hover:border-gray-300 hover:shadow-md"
            >
                {/* Заголовок карточки */}
                <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 font-mono">
                            {message.code}
                        </h3>
                        <div className="flex gap-2">
                    <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${message.language.toLowerCase() === "ru" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"}`}
                    >
                      {message.language.toUpperCase()}
                    </span>
                            {/* <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        message.source === "database"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {message.source === "database"
                        ? "База данных"
                        : "По умолчанию"}
                    </span> */}
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button
                            className="bg-gray-50 text-gray-700 border border-gray-300 rounded-md px-3 py-1 text-sm font-medium hover:bg-gray-100"
                            onClick={() => editMessage(message.id)}
                        >
                            Редактировать
                        </button>
                        {/* {message.source === "database" && (
                    <button
                      className="bg-red-50 text-red-500 border border-red-200 rounded-md px-3 py-1 text-sm font-medium hover:bg-red-100"
                      // onClick={() => deleteMessage(message)}
                    >
                      Сбросить
                    </button>
                  )} */}
                    </div>
                </div>

                {/* Превью сообщения */}
                <div className="mt-3">
                    <div className="bg-gray-50 border border-gray-200 rounded-md p-4 text-sm text-gray-800">
                        {getPreviewText(message.value).startsWith("http") ? (<a href={message.value}>Видео</a>) : (<div
                            dangerouslySetInnerHTML={{
                                __html: getPreviewText(message.value),
                            }}
                        />)}
                    </div>
                    <div className="flex justify-between items-center text-xs text-gray-400 mt-2">
                        <span>{message.value.length} символов</span>
                        {/* {message.updatedAt && (
                    <span>Обновлен: {formatDate(message.updatedAt)}</span>
                  )} */}
                    </div>
                </div>
            </div>))}
        </div>) : null}

        <Pagination
            setPage={setPage}
            page={page}
            limit={limit}
            total={15000}
            setLimit={setLimit}
        />
    </div>);
}

export default TextManagement;
