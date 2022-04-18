export default (context, inject) => {
  //tiem plugin vao 
  //
  inject("alert", function (message) {
    alert(message);
  });
};
