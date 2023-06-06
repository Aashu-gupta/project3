const calculationForm = document.getElementById("calculationForm");
const result = document.getElementById("result");

const calculateMarks= (e) =>{
const maxMarks=400;
e.preventDefault();

const formData= new FormData(calculationForm);
const data= {};
formData.forEach((value, key) => {
    data[key]= +value;
})
const totalMarks = data.maths + data.science + data.hindi + data.english;
const percentage = Math.round((totalMarks / maxMarks) * 100);
result.innerText = `You have got ${totalMarks} marks out of ${maxMarks} and your percentage is ${percentage}%`;
}