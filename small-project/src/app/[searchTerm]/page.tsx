import React from 'react'
import getWikiResults from '@/lib/getWikiResults'
import Item from './components/Item'
export async function generateMetadata({params}:{
    params:{
        searchTerm:string
    }
}){
    const wikiData:Promise<SearchResult> =getWikiResults(params.searchTerm);
    const data=await wikiData

    const displayTerm=params.searchTerm.replaceAll('%20',' ')
    if(!data?.query?.pages){
        return {
            title:"NO Results"
        }
    }
    return {
        title:displayTerm,
        description:"search Results"
    }

}
export default async function SearchResults({params}:{
    params:{
        searchTerm:string
    }
}) {
    const wikiData:Promise<SearchResult> =getWikiResults(params.searchTerm);
    const data=await wikiData
    const results:Result[]|undefined=data?.query?.pages
    const content=(

        <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
        {results
            ? Object.values(results).map(result => <>
            <Item key={result.pageid} result={result}></Item>
            </>)
            : <h2 className="p-2 text-xl">{`${params.searchTerm} Not Found`}</h2>
        }
    </main>
)
  return content
}
