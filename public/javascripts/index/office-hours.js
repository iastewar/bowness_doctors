// var officeHours =
// "<div class='row'> \
//     <div class='box'> \
//         <div class='col-lg-12'> \
//             <hr> \
//             <h2 class='intro-text text-center'><strong>Office hours</strong></h2> \
//             <hr> \
//             <p> \
//               The office is open from 9 am to 4:30 pm on Monday to Thursday  and 9 am to 2 pm on Friday. \
//               We are closed from noon to 1 pm daily for lunch and on the all weekends and statutory holidays. \
//             </p> \
//             <br> \
//             <p style='white-space: pre-line;'>Dr. Knight's office Hours are: \
//               Monday : 1-4PM \
//               Tuesday: 9- 230PM \
//               Wednesday: 130-4PM \
//               Thursday: 9-230PM \
//               Friday: 9-2PM \
//               \
//               Dr. Visvanatha's office Hours are: \
//               Monday: 9:00-3PM \
//               Tuesday: 1:00-4PM \
//               Wednesday: 9:00- 3PM \
//               Thursday: 9:00- 3PM \
//               Friday: 9-2pm \
//             </p> \
//         </div> \
//     </div> \
// </div>";

var editButton = "";
if (user) editButton = "<a href='/datas/office-hours/edit' class='btn btn-warning'>Edit</a>"

var officeHours = function(content) {
    return "<div class='row'> \
        <div class='box'> \
            <div class='col-lg-12'>" +
                editButton +
                "<hr> \
                <h2 class='intro-text text-center'><strong>Office hours</strong></h2> \
                <hr> \
                <div>" + content + "</div> \
            </div> \
        </div> \
    </div>";
}

module.exports = officeHours;
