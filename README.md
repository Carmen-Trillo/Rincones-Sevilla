## Proyect name: RINCONES DE SEVILLA

## 📝Project description:

This website only intends to bring Seville closer to those who want to see it from the eyes of someone who loves getting lost in its avenues but, above all, in its narrow streets, discovering the passage of history and life in each corner, and the contribution that each culture has made, leaving its mark on the city, enriching and beautifying it

## 🔧Stacks:
<ul>
<li>HTML5</li>
<li>CSS3</li>
<li>JavaScript</li>
<li>React</li>
<li>API</li>
<li>C#</li>
<li>Net Core 7<li>
<li>Boostrap 5</li>
</ul>

## 👩‍💻Work Approach:
<ul>
<li>On the one hand, a back has been worked on in C# and its connection between the back and the front has been worked on, which we can find in the PhotoServiceC file and with the PhotoHandlerC file<li>
<li>On the other hand, a Fake API has been created through the json server and the connection has been created through the PhotoService and HandlerService files, in case you want to work without a C# back</li>
<li>The Front is currently connected to the C# Back, having to perform transformations on the image since the photos are stored in the database with a base64 string.</li>
<li>Similarly, when an image is added to the front through the form, another transformation is executed to convert it to a base64 string that the database accepts.</li>
<li>In the back we have worked taking into account the possibility of loading the photos from the front in the database or adding new elements directly from the API</li>
<li>Only those photos that have been designated for publication are displayed on the web, the rest of the photos are stored in the database<li>
</ul>

## 💻How to install this project:

1. Clone the project
```bash
git clone https://github.com/Carmen-Trillo/Rincones-Sevilla
```

2. Install dependencies
```bash
npm install
```

3. Install React Router
```bash
npm install react-router-dom@6
```   

4. Install Bootstrap
```bash
npm install react-bootstrap bootstrap
```

5. Install React Paginate
```bash
npm install react-paginate 
```

6. Install API (in case of working with fake api)
```bash
npm install -g json-server
```  

7. Install Axios
```bash
npm install axios
```  

8. Install React Form
```bash
npm install react-hook-form 
```

9. Install Test
```bash
npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
npm install --save-dev ts-jest
```

10. Activate the server and keep this terminal open
```bash
npm run dev
```   

11. Activate API (in case of working with fake api)
```bash
json-server --watch ./api/product.json
``` 

## 📚Methodology:

- Methodology Agile with Scrum.
- Mob Programming.
- Pair Programming
- Solo Programming.

## 🧪Next Steps:
- Add favorites and share.
- Create a tab for the photos saved in the database and that we want to recover and publish
