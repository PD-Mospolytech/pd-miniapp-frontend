import "./App.css";
import Block from "./components/Block/Block";
import Section from "./components/Section/Section";

function App() {
   return (
      <div className="App">
         <Section>
            <h1>Распределение студентов по проектам</h1>

            <h2>Таблицы</h2>

            <Block>
               <h3>Студенты</h3>
               <hr />
               <h3>Проекты</h3>
            </Block>
         </Section>

      </div>
   );
}

export default App;
