//what is an action creator? -> a function to get store/update data in our store. 
// returns an object where the store can work with

export  function  storeDataInStore(data){
    return (
        {type: "add_posts", payload: data}
    )
}

export  function  setLoadingIndicator(data){
    return (
        {type: "loading", payload: data}
    )
}
