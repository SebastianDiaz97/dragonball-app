import { useQuery } from "@tanstack/react-query"
import axios from "axios";

export default function useCharacters<T>(page: number) {
    const url = `https://dragonball-api.com/api/characters?page=${page}&limit=12`
    return useQuery<T>({
        queryKey: ['characters', page],
        queryFn: async () =>
            await axios.get<T>(url).then((response) => response.data)
    })
}

export function useOneCharacter<T>(id: number) {
    const url = `https://dragonball-api.com/api/characters/${id}`
    return useQuery<T>({
        queryKey: ['oneCharacter', id],
        queryFn: async () => await axios.get<T>(url).then((response) => response.data)
    })
}