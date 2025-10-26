import axios from "axios";

export async function t(key: string, language: "RU" | "EN"): Promise<string> {
  const { data } = await axios.get(
    `http://localhost:3000/text/${language}/${key}`
  );

  return data;
}
