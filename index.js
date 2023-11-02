document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.querySelector("#addBtn");
    const modelContainer = document.querySelector(".model-conatiner");
    const modelBtn = document.querySelector(".model-btn");
    let editingNote = null;

    addBtn.addEventListener("click", () => {
        modelContainer.classList.remove("hide");
    });

    modelBtn.addEventListener("click", () => {
        const title = modelContainer.querySelector(".input-title").value;
        const description = modelContainer.querySelector(".input-disc").value;

        if (editingNote) {
            editingNote.querySelector(".note-title").textContent = title;
            editingNote.querySelector(".note-discription").textContent = description;
            modelBtn.textContent = "ADD NOTE";
            editingNote = null;
        } else 
            const note = document.createElement("div");
            note.classList.add("note");
            note.innerHTML = `
                <h2 class="note-title"> ${title} </h2>
                <p class="note-discription">
                    ${description}
                </p>
                <span>
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </span>
            `;
            const notesContainer = document.querySelector(".notes-container");
            notesContainer.appendChild(note);
        }

       
        modelContainer.querySelector(".input-title").value = "";
        modelContainer.querySelector(".input-disc").value = "";
        modelContainer.classList.add("hide");
    });

 
    document.querySelector(".notes-container").addEventListener("click", (event) => {
        const target = event.target;
        const note = target.closest(".note");

        if (note) {
            if (target.classList.contains("delete-btn")) {
               
                note.remove();
            } else if (target.classList.contains("edit-btn")) {
               
                const titleElement = note.querySelector(".note-title");
                const descriptionElement = note.querySelector(".note-discription");

             
                const titleInput = modelContainer.querySelector(".input-title");
                const descriptionInput = modelContainer.querySelector(".input-disc");

                titleInput.value = titleElement.textContent;
                descriptionInput.value = descriptionElement.textContent;

               
                modelContainer.classList.remove("hide");
                modelBtn.textContent = "UPDATE NOTE";
                editingNote = note;
            }
        }
    });
});
