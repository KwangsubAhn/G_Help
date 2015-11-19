
module.exports = {
    HostFamily: {
        cHostFamilyName: { type: String, required: true },
        cAddress: { type: String, required: true },
		cPhoneNum: { type: String, required: true },
		cAssignStudentNum: { type: Array },
    },
    Student: {
        cStuID: { type: String, required: true },
		cPassWord:{ type: String, required: true },
        cStuName: { type: String, required: true },
		cSemester: { type: Number, required: true },
		cStuMajor: { type: String, required: true },
		cIsMentor: { type: Boolean, default: false },
		cPairedStuNum: { type: String },
		cHostFamilyName: { type: String },	
    },
    Course: {
        cCourseNum: { type: String, required: true },
        cCourseName: { type: String, required: true },
		cStuMajor: { type: String, required: true },
		cCourseDescription: { type: String, required: true }
    },
};
