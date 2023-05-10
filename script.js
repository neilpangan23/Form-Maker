const deleteElement = (element) => {
    element.remove();
  };
  
  const insert = () => {
    let type = document.querySelector("#type").value;
    let label = document.querySelector("#label").value;
  
    switch (type) {
      case "text":
        appendText(label);
        break;
      case "button":
        appendButton(label);
        break;
      case "email":
        appendEmail(label);
        break;
      case "checkbox":
        appendCheckbox(label);
        break;
    }
  };
  
  const appendText = (label = "Default") => {
    let elem = document.createElement("input");
    elem.setAttribute("type", "text");
    elem.setAttribute("placeholder", label);
    elem.setAttribute("class", "form-control mt-2");
  
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute(
      "class",
      "btn btn-success d-flex justify-content-between "
    );
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteElement(elem);
      deleteElement(deleteButton);
    });
  
    document.querySelector("#display").append(elem, deleteButton);
  };
  
  const appendButton = (label = "Default") => {
    let elem = document.createElement("button");
    elem.setAttribute("class", "btn btn-primary mt-2 form-control");
    elem.textContent = label;
  
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute(
      "class",
      "btn btn-success d-flex justify-content-between"
    );
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteElement(elem);
      deleteElement(deleteButton);
    });
  
    document.querySelector("#display").append(elem, deleteButton);
  };
  
  const appendEmail = (label = "Default") => {
    let elem = document.createElement("input");
    elem.setAttribute("type", "email");
    elem.setAttribute("placeholder", label);
    elem.setAttribute("class", "form-control mt-2");
  
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute(
      "class",
      "btn btn-success d-flex justify-content-between"
    );
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteElement(elem);
      deleteElement(deleteButton);
    });
  
    document.querySelector("#display").append(elem, deleteButton);
  };
  
  const appendCheckbox = (label = "Default") => {
    let elem = document.createElement("input");
    elem.setAttribute("type", "checkbox");
    elem.setAttribute("id", label);
    elem.setAttribute("name", label);
    elem.setAttribute("class", "form-check-input mt-2");
  
    let elemLabel = document.createElement("label");
    elemLabel.setAttribute("for", label);
    elemLabel.textContent = label;
  
    let container = document.createElement("div");
    container.setAttribute("class", "form-check");
    container.append(elem, elemLabel);
  
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute(
      "class",
      "btn btn-success d-flex justify-content-between"
    );
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteElement(container);
      deleteElement(deleteButton);
    });
  
    document.querySelector("#display").append(container, deleteButton);
  };