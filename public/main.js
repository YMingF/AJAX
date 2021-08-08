
let n=1
getPage.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status===200){
           const array=JSON.parse(request.response)
           array.forEach(item=>{
               const li=document.createElement('li')
               li.textContent=item.id
               xxx.appendChild(li)
           })
           n+=1
        }
    }
    request.send()
}

getJSON.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','./5.json')
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status===200){
            console.log(request.response)
            const object=JSON.parse(request.response)//把符合JSON语法的字符串变成JS对象
            myName.textContent=object.name//将ID为myName的span标签的内容设置成JS对象的name属性值
            console.log(object)
        }
    }
    request.send()
}

getXML.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','./4.xml')
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status===200){
            const dom=request.responseXML//返回一个XML对象,即一个DOM元素
            const text=dom.getElementsByTagName('warning')[0].textContent//获取返回的集合的第一个元素的文本内容
            console.log(text.trim())//trim()用于去除text里的空格
        }
    }
    request.send()
}
getCSS.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','./style.css')
    request.onreadystatechange=()=>{
        //当readyState的值为4时,表示下载完成,但不知是成功2xx还是失败4xx,5xx
       if(request.readyState===4){
            if(request.status>=200 && request.status<300){//状态码在这个范围就是成功
                const style=document.createElement('style')
                style.innerHTML=request.response
                document.head.appendChild(style)
            }else{
                alert('加载CSS失败')
            }
           
       }
    }
   
    request.send()
}

getJS.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','./2.js')
    request.onload=()=>{
        const t=document.createElement('script')
        t.innerHTML=request.response
        document.body.appendChild(t)
    }

    request.onerror=()=>{

    }
    request.send()

}
getHTML.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET','./3.html' )
     request.onload=()=>{
        const ht=document.createElement('div')
        ht.innerHTML=request.response
        document.body.appendChild(ht)
     }
    request.onerror=()=>{}
    request.send()
}