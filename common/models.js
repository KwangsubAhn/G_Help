
module.exports = {
    HostFamily: {
        cHostFamilyName: { type: String, required: true },
        cAddress: { type: String, required: true },
		cPhoneNum: { type: String, required: true }
    },
    Student: {
        cStuID: { type: String, required: true },
        cStuName: { type: String, required: true },
		cEnrolYear: { type: Number, required: true },
		cCourseNum: { type: Array },
		cIsMentor: { type: Boolean, default: false },
		cPairedMentorStuNum: { type: String },
    },
    Course: {
        cCourseNum: { type: Number, required: true },
        cCourseName: { type: String, required: true },
		cCourseDescription: { type: String, required: true }
    },
};
