const countries = [ "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt"];

let n = countries.length;
let cols = 4;

document.write("<table border='1'>");

for (let i = 0; i < n; i++) {
  if (i % cols === 0) {
    document.write("<tr>");
  }

  document.write("<td>" + (i + 1) + "</td>");
  document.write("<td>" + countries[i] + "</td>");
  
    

  if ((i + 1) % cols === 0 || i === n - 1) {
    document.write("</tr>");
  }
}

document.write("</table>");
