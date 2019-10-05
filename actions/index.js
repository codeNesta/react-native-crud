import firebase from '../fb'

export function getBlogs(){
    return(dispatch) => {

        dispatch({
            type:"BLOGS_LOADING_STATUS",
            payload:true
        })

        firebase.database().ref('/blogs').on('value', snapshot => {
                    dispatch({
                        type:"BLOGS_FETCH",
                        payload:snapshot.val()
                    })

                    dispatch({
                        type:"BLOGS_LOADING_STATUS",
                        payload:false
                    })
              
        })

       
                               
    }
}



export function postBlogs(title, content){
    return (dispatch) => {
        firebase.database().ref('/blogs').push({title, content})
    }
}


export function deleteBlog(key){
    return (dispatch) => {
        firebase.database().ref(`/blogs/${key}`).remove()
    }
}

export function editBlog(title, content,key){
    return (dispatch) => {
        firebase.database().ref(`/blogs`).child(key).update({title, content})
    }
}



