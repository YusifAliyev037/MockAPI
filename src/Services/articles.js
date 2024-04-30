import { instanceAxsios } from "../Helper/instanceAxsios"



export const getBlogs = async ()=>{
    const response = await instanceAxsios.get("posts");
    return response;
};

export const getBlogId = async (id)=>{
    const response = await instanceAxsios.get("posts/" + id);
    return response;
};

export const crtBlog = async (data) =>{
    const response = await instanceAxsios({method:"POST", url: "posts", data});
    return response
}

export const uptBlog = async (id, data) => {
    const response = await instanceAxsios({
        method: "PUT",
        url: "posts/" + id,
        data,
    });
    return response
}

export const rmvBlogId = async (id) =>{
    const response = await instanceAxsios({
        method: "DELETE",
        url: "posts/" + id
    });
    return response
}
