class studentServices{
    static getTotalStudents(students){
        if(students.length === 0){
            return "DB vácia";
        } else return students;
    }
    static getStudentEmail(student){
        return student.email;
    }
    static getStudentCertification(student){
        return student.haveCertification;
    }
    static getStudentCredit(student){
        return student.credits;
    }
    static studentHaveCertification(students){
        const haveCertification = students.filter((student) => student.haveCertification == true);
        const haveInfo = haveCertification.map((student) => student.email );
        return haveInfo;
    }
    static studentCredits(students, credits){
        const haveStudentCredits = students.filter((student) => student.credits > credits);
        return haveStudentCredits;
    }
}

module.exports = studentServices;