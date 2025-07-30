import{A as n}from"./CaXPdKhU.js";const p=(e,...a)=>{const s={...e};return Object.keys(s).forEach(i=>{a.includes(i)&&delete s[i]}),s},g=`# Svelte

---

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

\`\`\`ts
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>

// comment here
\`\`\`

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`,t=e=>e,u=[t({name:"Programming Languages",slug:"pro-lang"}),t({name:"Frameworks",slug:"framework"}),t({name:"Libraries",slug:"library"}),t({name:"Langauges",slug:"lang"}),t({name:"Databases",slug:"db"}),t({name:"ORMs",slug:"orm"}),t({name:"DevOps",slug:"devops"}),t({name:"Testing",slug:"test"}),t({name:"Dev Tools",slug:"devtools"}),t({name:"Markup & Style",slug:"markup-style"}),t({name:"Design",slug:"design"}),t({name:"Soft Skills",slug:"soft"})],o=e=>{const a=p(e,"category");return e.category&&(a.category=u.find(s=>s.slug===e.category)),a},h=(...e)=>l.filter(a=>e.length===0?!0:e.includes(a.slug)),b=e=>{const a=[],s=[];return l.forEach(i=>{if(e.trim()&&!i.name.toLowerCase().includes(e.trim().toLowerCase()))return;if(!i.category){s.push(i);return}let r=a.find(d=>{var c;return d.category.slug===((c=i.category)==null?void 0:c.slug)});r||(r={items:[],category:i.category},a.push(r)),r.items.push(i)}),s.length!==0&&a.push({category:{name:"Others",slug:"others"},items:s}),a},m="Skills",l=[o({slug:"js",color:"yellow",description:"JavaScript (JS) is a lightweight, interpreted (or just-in-time compiled) programming language with first-class features. While its best known as a web page scripting language, many non-browser environments also use it, such as Node.js, Apache CouchDB, and Adobe Acrobat. JavaScript is a dynamic, multiparadigm, single-threaded, prototype-based language that supports object-oriented, imperative, and declarative styles (e.g., functional programming). Its impressive, but do you know what s also impressive? Shooting yourself in the foot by writing code with this language: 11 + 1; // 111 : thats right, string concatenation! 11 - 1; // 10 : why??? Seriously, I enjoyed learning this strange language. I enjoyed creating interactive websites, first using only JavaScript, then React and Svelte. Some learning steps are more tortuous than others because you have to become aware of whats actually happening internally. Lets just say Im not your average developer.",logo:n.JavaScript,name:"Javascript",category:"pro-lang"}),o({slug:"ts",color:"blue",description:"TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript. Because TypeScript is a superset of JavaScript, all JavaScript programs are syntactically valid TypeScript, but they can fail to type-check for safety reasons.TypeScript may be used to develop JavaScript applications for both client-side and server-side execution (as with Node.js or Deno). Multiple options are available for transpilation. The default TypeScript Compiler can be used, or the Babel compiler can be invoked to convert TypeScript to JavaScript.",logo:n.TypeScript,name:"Typescript",category:"pro-lang"}),o({slug:"css",color:"blue",description:"CSS (Cascading Style Sheets) is a styling language used to control the visual presentation of web pages. I have experience building responsive layouts using Flexbox and CSS Grid, implementing animations, and maintaining consistent design systems across modern web applications.",logo:n.CSS,name:"CSS",category:"markup-style"}),o({slug:"html",color:"orange",description:"HTML (HyperText Markup Language) is the standard language used to structure content on the web. I use semantic HTML to build accessible, well-structured web pages, ensuring compatibility across devices and seamless integration with CSS and JavaScript for dynamic interfaces.",logo:n.HTML,name:"HTML",category:"markup-style"}),o({slug:"sass",color:"pink",description:"Sass (Syntactically Awesome Stylesheets) is a CSS preprocessor that adds powerful features like variables, nesting, mixins, and functions to streamline and scale stylesheet development. I use Sass to write modular and maintainable CSS, improving code organization and reusability in complex web projects.",logo:n.Sass,name:"Sass",category:"markup-style"}),o({slug:"reactjs",color:"cyan",description:"React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.",logo:n.ReactJs,name:"React Js",category:"library"}),o({slug:"svelte",color:"orange",description:g,logo:n.Svelte,name:"Svelte",category:"library"}),o({slug:"SqlServer",color:"red",description:"Microsoft SQL Server is a relational database management system used for storing, retrieving, and managing data. I have worked with SQL Server to design relational schemas, write complex queries, develop stored procedures, and ensure data integrity and performance optimization in enterprise-level applications.",logo:n.sqlserver,name:"sqlserver",category:"db"}),o({slug:"NodeJs",color:"green",description:"Node.js is a JavaScript runtime built on Chrome’s V8 engine, used to develop fast and scalable server-side applications. I use Node.js to create RESTful APIs, handle asynchronous operations, and build efficient backend services for web applications.",logo:n.NodeJs,name:"Node Js",category:"server"}),o({slug:"python",color:"yellow",description:"I use Python to build efficient, scalable scripts and backend services, including Telegram bots. With the help of libraries like python-telegram-bot, I automate tasks, create custom chat commands, and integrate APIs to deliver real-time information and services directly to Telegram users.",logo:n.python,name:"python",category:"server"}),o({slug:"telegram",color:"blue",description:"I design and develop custom Telegram bots using Python, enabling automated interactions, real-time notifications, and seamless API integrations. My bots handle tasks such as content delivery, data tracking, user commands, and chat moderation, offering reliable tools for channels, groups, and personal use.",logo:n.telegram,name:"telegram",category:"communication"})],f={title:m,items:l};export{f as S,h as a,b as g};
