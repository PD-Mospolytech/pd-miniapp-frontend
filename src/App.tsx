import "./App.css";
import Block from "./components/Block/Block";
import Section from "./components/Section/Section";

function App() {
   return (
      <div className="App">
         <Section>
            <h1>Проектная деятельность</h1>
            <p>
               <i>Вниманию студентов 2-4 курсов!</i>
            </p>

            <h2>Ваш проект</h2>

            <Block margin="0 0 16px 0">
               <h3>Городские огородники</h3>
               <p>
                  Разработка технологического набора «Городской огородник» и его
                  вывод на рынок.
               </p>
            </Block>

            <h2>Результаты аттестации</h2>

            <Block>
               <h3>За текущий семестр</h3>
               <hr />
               <h3>За прошлый семестр</h3>
               <hr />
               <h3>Итог</h3>
            </Block>
         </Section>

         <Section>
            <h2>Заявки на проект</h2>

            <Block margin="0 0 16px 0" width="300px">
               <h3>Подкаст о подкастах</h3>
               <p>
                  Цель такая-то, актуальность такая-то: ещё опишем проблему,
                  которую мы решаем. Вот ещё немножко текста.
               </p>
            </Block>

            <h2>История проектов</h2>
            <Block width="300px">
               <h3>Подкаст о подкастах</h3>
               <p>
                  Цель такая-то, актуальность такая-то: ещё опишем проблему,
                  которую мы решаем. Вот ещё немножко текста.
               </p>
            </Block>
         </Section>

         <Section>
            <h2>Другое</h2>
            <div className="Other-Content" style={{ marginTop: "14px" }}>
               <Block>
                  <h3>Проекты ЦПД (2022-23)</h3>
               </Block>
               <Block>
                  <h3>Создать проект</h3>
               </Block>
               <Block>
                  <h3>Сообщить об ошибке или идеи?</h3>
               </Block>
            </div>
         </Section>
      </div>
   );
}

export default App;
