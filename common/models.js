
module.exports = {
    HostFamily: {
        cHostFamilyName: { type: String, required: true },
        cAddress: { type: String, required: true },
		cPhoneNum: { type: String, required: true },
		cDescription: { type: String },
		cAssignStudentNum: { type: Array },
    },
    
    Student: {
        cStuID: { type: String, required: true },
		cPassWord:{ type: String, required: true },
        cStuName: { type: String, required: true },
		cSemester: { type: Number, required: true },
		cStuMajor: { type: String, required: true },
		cGPA: { type: Number },
		cIsMentor: { type: Boolean, default: false },
		cPairedStuNum: { type: String },
		cHostFamilyName: { type: String },
		cEvents	: { type: Array }
    },
    
    Course: {
        cCourseNum: { type: String, required: true },
        cCourseName: { type: String, required: true },
		cStuMajor: { type: String, required: true },
		cCourseDescription: { type: String, required: true }
    },

    Administer: {
        cAdName: { type: String, required: true },
		cAdPassWord:{ type: String, required: true },	
    },

    Staff: {
    	cName: { type: String, required: true},
    	cPosition: { type: String},
    	cMail: { type: String},
    	cRoom: { type: String},
    	cPhone: { type: String}
    },
    
    Article: {
    	cIndex: { type: Number, default: 1 },
    	cAuthor:{ type: String, required: true },
    	cPassword:{ type: String, required: true },
    	cTitle:{ type: String, required: true },
    	cContent:{ type: String, required: true },
    	cDate: { type: Date, default: Date.now },
    	cView:{ type: Number, required: true },
    	cPicPath:{ type: String}
    },
    
    counter: {
    	_id: { type: String, required: true },
    	seq: { type: Number, required: true }
    },
	
	Events: {
    	ctime: { type: String, required: true },
    	cname: { type: String, required: true },
    	clocation: { type: String, required: true },
    	cdescription : { type: String, required: true }

    }
    
    
};
