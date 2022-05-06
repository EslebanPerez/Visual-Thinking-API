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
        
    }
    static studentHaveCertification(students){
        
    }
    static studentCredits(students, credits){
        
    }
}

module.exports = studentServices;