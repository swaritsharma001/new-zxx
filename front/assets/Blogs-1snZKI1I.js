import{u as d,r as o,j as e,H as x,N as m,L as h,F as g,a as u}from"./index-ZNIShJOc.js";function j(){const{id:s}=d(),[t,a]=o.useState(null),[l,i]=o.useState(!0),[c,n]=o.useState(null);return o.useEffect(()=>{(async()=>{try{const r=await u.get(`https://worldtoday.me/Save.jsx/blog/blog/${s}`);r.status===200?a(r.data):n("Failed to load blog.")}catch{n("Error fetching blog data.")}finally{i(!1)}})()},[s]),l?e.jsx("div",{className:"flex justify-center items-center py-8",children:e.jsx("div",{className:"w-16 h-16 border-t-4 border-blue-600 border-solid rounded-full animate-spin"})}):c?e.jsxs("div",{className:"flex flex-col justify-center items-center py-8 text-center",children:[e.jsx("p",{className:"text-red-600 font-semibold mb-4",children:"SORRY THE PAGE YOU ARE LOOKING FOR NOT AVAILABLE"}),e.jsx("button",{onClick:()=>window.location.reload(),className:"px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300",children:"Retry"})]}):e.jsxs(e.Fragment,{children:[e.jsxs(x,{children:[e.jsxs("title",{children:[t.Title," - Tech in Words"]}),e.jsx("meta",{name:"description",content:t.description.slice(0,160)}),e.jsx("meta",{name:"keywords",content:"blogs, technology, programming, tutorials"}),e.jsx("meta",{name:"author",content:"World Today"}),e.jsx("meta",{name:"robots",content:"index, follow"}),e.jsx("link",{rel:"canonical",href:`https://worldtoday.me/blog/${s}`}),e.jsx("meta",{property:"og:title",content:t.Title}),e.jsx("meta",{property:"og:description",content:t.description.slice(0,160)}),e.jsx("meta",{property:"og:image",content:t.cover}),e.jsx("meta",{property:"og:url",content:`https://worldtoday.me/blog/${s}`}),e.jsx("meta",{property:"og:type",content:"article"}),e.jsx("meta",{property:"og:site_name",content:"World Today"})]}),e.jsx(m,{}),e.jsx("main",{className:"",children:e.jsxs("article",{className:"max-w-3xl mx-auto p-8 transition duration-300 hover:shadow-xl",children:[e.jsx("header",{className:"mb-8",children:e.jsx("h1",{className:"text-4xl font-extrabold text-grey-900 mb-4 fonts",children:t.Title})}),e.jsx("div",{className:"mb-8",children:e.jsx("img",{src:t.cover,alt:`Cover image for ${t.Title}`,className:"w-full h-64 object-cover rounded-lg mb-6 transition-transform transform hover:scale-105",loading:"lazy"})}),e.jsx("section",{className:"prose lg:prose-xl text-gray-800 mb-8 text-fonts",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:t.description}})}),e.jsx("footer",{className:"text-center mt-8",children:e.jsx(h,{to:"/",className:"inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300",children:"Back to All Blogs"})})]})}),e.jsx("div",{className:"fixed bottom-4 right-4",children:e.jsx("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300",children:"↑ Top"})}),e.jsx(g,{})]})}export{j as default};
