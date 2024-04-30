import axios from "axios";
import MockAdapter from "axios-mock-adapter"



const mock = new MockAdapter(axios)



mock.onGet("/faqs").reply(200,{
    faqs:[
        { title:"Lorem",desc:"Lorem Ipsum", id:1},
        { title:"Lorem2",desc:"Lorem Ipsum2", id:1}
    ]
});


export const getFaqs = async ()=>{
    const response = await axios({ method: "GET", url: "faqs"});
    return response;
};




// export const getFaqs = async ()=>{
//     const response = await instanceAxsios({ method: "GET", url: "faqs"});
//     return response;
// };


