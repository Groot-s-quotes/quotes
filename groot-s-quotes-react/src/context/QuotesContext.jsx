import React, {createContext, useState, useEffect} from 'react'
import swal from "sweetalert";

export const QuotesContext = createContext();

export const QuotesProvider = ({children}) => {
    const [quotesItem, setQuotesItem]= useState(() => {
        try {
            const quotesinsessionstorage = sessionStorage.getItem("quotesSelected");
            return quotesinsessionstorage ? JSON.parse(quotesinsessionstorage) : [];
        } catch (error) {
            console.log(error)
        }
        
    })

    useEffect(() => {
        sessionStorage.setItem("quotesSelected", JSON.stringify(quotesItem));
    }, [quotesItem]);

    const addToCollection = (quote) => {
        const inCollection = quotesItem.find(
            (quoteInCollection) => quoteInCollection.id === quote.id
            );
              
              if (inCollection) {
                  return (
                    swal("Warning","This quote is already exist in your collections","warning"));
                };
                      
                if (quotesItem && quotesItem.length < 10) {
                    setQuotesItem([...quotesItem, {...quote}])
                    return
                }
                swal("Warning","You added more than 8 quotes to your favorites","warning");
    
              };
              console.log(quotesItem);


    return (
      <QuotesContext.Provider value={{quotesItem, addToCollection}}>
                {children}
      </QuotesContext.Provider>
    )
}




