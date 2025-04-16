import { useState } from "react";
import { MdConstruction } from "react-icons/md";

const AddMember = () => {
    const [studentId, setStudentId] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
        if (!studentId.startsWith("CSE ")) {
            setStudentId("CSE ");
        }
    };

    const handleBlur = () => {
        setIsFocused(false);
        if (studentId === "CSE ") {
            setStudentId("");
        }
    };

    const handleChange = (e) => {
        let value = e.target.value;

        if (value.startsWith("CSE ")) {
            const digits = value.slice(4).replace(/\D/g, "");
            setStudentId("CSE " + digits);
        } else {
            setStudentId("CSE ");
        }
    };

    // Collecting Form Data
    const handleAddMember = (e) => {
        e.preventDefault();
        const form = e.target;

        const Name = form.studentName.value;
        const Section = form.section.value;
        const Batch = form.batch.value + "-" + Section;
        const StudentId = form.studentId.value;
        const ContactNo = form.contactNo.value;
        const Email = form.email.value;

        const newMember = { Name, Batch, Section, StudentId, ContactNo, Email };
        console.log(newMember);
    }

    return (
        <div className='min-h-[calc(100vh-130px)] flex flex-col items-center justify-center'>
            {/* Add Member Form */}
            <div className="add-member px-11 py-8 rounded-md">
                <h1 className="lg:text-3xl font-semibold text-white mb-8 text-center">Add New Club Member</h1>
                <form onSubmit={handleAddMember}>
                    <div className="grid lg:grid-cols-2 gap-5">
                        {/* Name */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-white">Enter Club Member Name</legend>
                            <input type="text" className="input w-sm text-black" name="studentName" placeholder="Type Club Member here" required />
                        </fieldset>
                        {/* Batch */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-white">Enter Club Member Batch(e.g. 28)</legend>
                            <input type="number" className="input w-sm text-black" name="batch" placeholder="Type Club Member Batch here" required />
                        </fieldset>
                        {/* Section */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-white">Enter Club Member Section(e.g. A)</legend>
                            <input type="text" className="input w-sm text-black" name="section" placeholder="Type Club Member Section here" required />
                        </fieldset>
                        {/* ID */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-white">Enter Club Member ID(e.g. 02807546)</legend>
                            <input
                                type="text"
                                className="input w-sm text-black"
                                name="studentId"
                                placeholder={!isFocused ? "Type Club Member ID here" : ""}
                                value={studentId}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                required />
                        </fieldset>
                        {/* Contact */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-white">Enter Club Member Phone(e.g. 01xxxxxxxxx)</legend>
                            <input type="text" className="input w-sm text-black" name="contactNo" placeholder="Type Club Member Section here" required />
                        </fieldset>
                        {/* Email */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-white">Enter Club Member Email</legend>
                            <input type="email" className="input w-sm text-black" name="email" placeholder="Type Club Member Section here" required />
                        </fieldset>
                    </div>
                    <button className="btn add-member-btn w-full mt-5">Add Member</button>
                </form>
            </div>
        </div>
    );
};

export default AddMember;