import axios from "axios";
import sidebar from "../Component/sidebar";
const side=document.getElementById("sidebar");
side.innerHTML=sidebar;

const posts = async() =>{
    try{
        const res=await axios.get('http://localhost:3000/posts')
        dataop(res.data);
        console.log(res.data);
    }
    catch(err)
    {
        console.log(err);
    }
} 
posts();

let post=document.getElementById('posts');
const dataop=(data)=>{
    post.innerHTML=null;
    data.map((item) => {
        const div= document.createElement('div');
        div.className="flex-col "
        const p=document.createElement('p');
        p.innerText=item.user_name;
        p.className=""
        const p1=document.createElement('p');
        p1.innerText=item.caption;
        const like=document.createElement('p');
        like.className="font-semibold text-sm pt-3"
        like.innerText=item.likes+" Likes";
        const img=document.createElement('img');
        img.src=item.image;
        img.className="w-[300px]";
        const heart=document.createElement('i');
        heart.className="fa-regular fa-heart"
        const cmt=document.createElement('i');
        cmt.className="fa-regular fa-comment";
        const share=document.createElement('i');
        share.className="fa-regular fa-paper-plane";

        const div1=document.createElement('div');
        div1.className="flex flex-row gap-2 text-xl"
        const div2=document.createElement('div');
        div2.className="flex flex-row  justify-between pt-2 text-xl"
        const save=document.createElement('i');
        save.className="fa-regular fa-bookmark"

        div1.append(heart,cmt,share);
        div2.append(div1,save);
        div.append(p,img,div2,like,p1);
        post.append(div);
        
    })
}