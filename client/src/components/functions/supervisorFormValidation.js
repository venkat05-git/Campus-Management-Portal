const supervisorFormValidate = (
  name,
  email,
  age,
  gender,
  category,
  contact
) => {
  let errorNote = [];
  if (!name || name.value == undefined) errorNote.push("name");
  if (!email || email.value == undefined) errorNote.push("email");
  if (!age || age.value == undefined) errorNote.push("age");
  if (!gender || gender.value == undefined) errorNote.push("gender");
  if (!category || category.value == undefined) errorNote.push("category");
  if (!contact || contact.value == undefined) errorNote.push("contact");
  return errorNote;
};

export default supervisorFormValidate;
