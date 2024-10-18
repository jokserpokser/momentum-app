import React, { useEffect, useState } from "react";

function Tasks() {
   const [todos, setTodos] = useState([]);
   const [todoInput, setTodoInput] = useState("");

   const [showContainer, setShowContainer] = useState(false);

   const handleAddTodo = (e) => {
      e.preventDefault();
      setTodos([...todos, { name: todoInput, checked: false }]);
      setTodoInput("");
   };

   useEffect(() => {
      console.log(todos);
   }, [todos]);

   return (
      <div>
         {showContainer && (
            <div className="bg-black bg-opacity-60 p-5 py-3 w-72 text-left rounded-md">
               <h2 className="text-lg mb-3">Today</h2>
               {todos.map((todo, index) => (
                  <label
                     key={index}
                     className="flex items-center"
                  >
                     <input
                        type="checkbox"
                        className={`mr-2`}
                        checked={todo.checked}
                        onChange={(e) => {
                           const newTodos = [...todos];
                           newTodos[index].checked = e.target.checked;
                           setTodos(newTodos);
                        }}
                     />
                     <span
                        className={`${
                           todo.checked ? `line-through text-gray-700` : ``
                        }`}
                     >
                        {todo.name}
                     </span>
                  </label>
               ))}

               <form
                  action=""
                  onSubmit={handleAddTodo}
               >
                  <input
                     type="text"
                     className="bg-transparent focus:outline-none mt-3"
                     placeholder="New Task"
                     value={todoInput}
                     onChange={(e) => {
                        setTodoInput(e.target.value);
                     }}
                  />

                  <input
                     type="submit"
                     className="w-0"
                     value=""
                  />
               </form>
            </div>
         )}

         <div className="text-right">
            <button
               className=""
               onClick={() => {
                  setShowContainer(!showContainer);
               }}
            >
               Tasks
            </button>
         </div>
      </div>
   );
}

export default Tasks;
