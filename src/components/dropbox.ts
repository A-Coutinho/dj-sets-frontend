import type { DropboxFile, DropboxFileResponse } from "./customTypes";

const BASE_URL = "https://api.antoniocoutinho.pt/sets";

export async function fetchFiles(): Promise<DropboxFile[]> {
    const res = await fetch(`${BASE_URL}/files`);
    if (!res.ok) throw new Error(`Error fetching files: ${res.statusText}`);
    const data: DropboxFileResponse = await res.json();

    if (data.files.length && data.files.length > 0) {
        console.log("1");
        data.files.forEach((element) => {
            element.cover = data.cover;
        });
        console.log(data)

        return data.files.sort((a, b) => a.name.localeCompare(b.name));
    } else {
        return data.files;
    }
}
