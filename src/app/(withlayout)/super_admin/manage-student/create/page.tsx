"use client";

import StepperForm from "@/app/components/StepperForm/StepperForm";
import GuardianInfo from "@/app/components/StudentForms/GuardianInfo";
import LocalGuardianInfo from "@/app/components/StudentForms/LocalGuardianInfo";
import StudentBasicInfo from "@/app/components/StudentForms/StudentBasicInfo";
import StudentInfo from "@/app/components/StudentForms/StudentInfo";

const CreateStudentPage = () => {
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Information",
      content: <StudentBasicInfo />,
    },
    {
      title: "Guardian Information",
      content: <GuardianInfo />,
    },
    {
      title: "Local Guardian Information",
      content: <LocalGuardianInfo />,
    },
  ];

  const handleStudentSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Create Student</h1>
      <StepperForm
        submitHandler={(value) => {
          handleStudentSubmit(value);
        }}
        steps={steps}
      />
    </div>
  );
};

export default CreateStudentPage;
