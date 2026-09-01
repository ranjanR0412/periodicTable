const createPeriodicElement = (symbol, atomicNumber, name) => {
    const elementDiv = document.createElement("div");
    elementDiv.setAttribute("data-atomic-number", atomicNumber);
    elementDiv.setAttribute("data-name", name);
    elementDiv.classList.add('element');
    elementDiv.textContent = symbol;
    return elementDiv;
}; 


const handleEvenClick = (event) => {
    const target = event.target;
    if (target.classList.contains('element')) {
        const atomicNumber = target.getAttribute('data-atomic-number');
        const name = target.getAttribute('data-name');
        alert(`Atomic Name : ${name}\nAtomic Number : ${atomicNumber}`);
        console.log(`Element clicked: ${name}\nAtomic Number: ${atomicNumber}`);
    }
};

function initializePeriodicTable() {
    const mainBody = document.querySelector('.mainBody');
    for (let i = 1; i <= 50; i++) {
        const elementDiv = createPeriodicElement(`Elem${i}`, i, `Element ${i}`);
        mainBody.append(elementDiv);
    }
       mainBody.addEventListener("click",handleEvenClick);
}

initializePeriodicTable();