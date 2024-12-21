export function SetupAddModal(modalId, openBtnId, cancelBtnId, addBtnId, addBtnFn) {
    const modal = document.getElementById(modalId);

    function modalfn(event) {
        event.preventDefault();
        modal.close();
        addBtnFn(event);
    }
    
    document.getElementById(openBtnId).addEventListener("click", () => {
        modal.showModal();
    });

    document.getElementById(cancelBtnId).addEventListener("click", () => {
        modal.close();
    });

    document.getElementById(addBtnId).addEventListener("click", modalfn);
}
