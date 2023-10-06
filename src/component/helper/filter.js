function filter(data, search) {
  return data.filter((item) => {
    if (item.address.country.includes(search)) {
      return true;
    } else if (item.address.state.includes(search)) {
      return true;
    } else if (item.address.city.includes(search)) {
      return true;
    } else if (item.hotelname.includes(search)) {
      return true;
    } else {
      return false;
    }
  });
}
function makecapital(value) {
  const string = value.toLowerCase();
  const str_array = string.split("");
  const cap = str_array[0].toUpperCase();
  str_array.splice(0, 1, cap);
  const index = str_array.indexOf(" ") + 1;
  const cap_space = str_array[index].toUpperCase();
  str_array.splice(index, 1, cap_space);
  return str_array.join("");
}

export { filter, makecapital };
