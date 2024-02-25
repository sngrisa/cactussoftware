import Swal from "sweetalert2";

let PopUpForm = () => {
  return Swal.fire({
    position: "center",
    background: "whitesmoke",
    title: `<h3> Mensaje enviado!!!</h3>`,
    text: `Su mensaje fue envíado con éxito a CactusSoftware`,
    icon: "success",
    showConfirmButton: false,
    timer: 3000
  })
}

export default PopUpForm;

