import Moment from "moment";

export default function FGetDate() {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return Moment(`${year}-${month}-${date}`).format('YYYY-MM-DD')
}
