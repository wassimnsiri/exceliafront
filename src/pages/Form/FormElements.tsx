import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import CheckboxFive from '../../components/Checkboxes/CheckboxFive';
import CheckboxFour from '../../components/Checkboxes/CheckboxFour';
import CheckboxOne from '../../components/Checkboxes/CheckboxOne';
import CheckboxThree from '../../components/Checkboxes/CheckboxThree';
import CheckboxTwo from '../../components/Checkboxes/CheckboxTwo';
import SwitcherFour from '../../components/Switchers/SwitcherFour';
import SwitcherOne from '../../components/Switchers/SwitcherOne';
import SwitcherThree from '../../components/Switchers/SwitcherThree';
import SwitcherTwo from '../../components/Switchers/SwitcherTwo';
import DefaultLayout from '../../layout/DefaultLayout';
import DatePickerOne from '../../components/Forms/DatePicker/DatePickerOne';
import DatePickerTwo from '../../components/Forms/DatePicker/DatePickerTwo';
import SelectGroupTwo from '../../components/Forms/SelectGroup/SelectGroupTwo';
import MultiSelect from '../../components/Forms/MultiSelect';

const FormElements = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = {
      defaultInput: (event.currentTarget.elements.namedItem('defaultInput') as HTMLInputElement).value,
      activeInput: (event.currentTarget.elements.namedItem('activeInput') as HTMLInputElement).value,
      disabledInput: (event.currentTarget.elements.namedItem('disabledInput') as HTMLInputElement).value,
      switcherOne: (event.currentTarget.elements.namedItem('switcherOne') as HTMLInputElement).checked,
      switcherTwo: (event.currentTarget.elements.namedItem('switcherTwo') as HTMLInputElement).checked,
      switcherThree: (event.currentTarget.elements.namedItem('switcherThree') as HTMLInputElement).checked,
      switcherFour: (event.currentTarget.elements.namedItem('switcherFour') as HTMLInputElement).checked,
      datePickerOne: (event.currentTarget.elements.namedItem('datePickerOne') as HTMLInputElement).value,
      datePickerTwo: (event.currentTarget.elements.namedItem('datePickerTwo') as HTMLInputElement).value,
      fileUpload: (event.currentTarget.elements.namedItem('fileUpload') as HTMLInputElement).files?.[0].name || '',
      defaultTextarea: (event.currentTarget.elements.namedItem('defaultTextarea') as HTMLTextAreaElement).value,
      activeTextarea: (event.currentTarget.elements.namedItem('activeTextarea') as HTMLTextAreaElement).value,
      disabledTextarea: (event.currentTarget.elements.namedItem('disabledTextarea') as HTMLTextAreaElement).value,
      checkboxOne: (event.currentTarget.elements.namedItem('checkboxOne') as HTMLInputElement).checked,
      checkboxTwo: (event.currentTarget.elements.namedItem('checkboxTwo') as HTMLInputElement).checked,
      checkboxThree: (event.currentTarget.elements.namedItem('checkboxThree') as HTMLInputElement).checked,
      checkboxFour: (event.currentTarget.elements.namedItem('checkboxFour') as HTMLInputElement).checked,
      checkboxFive: (event.currentTarget.elements.namedItem('checkboxFive') as HTMLInputElement).checked,
      selectGroup: (event.currentTarget.elements.namedItem('selectGroup') as HTMLSelectElement).value,
      multiSelect: Array.from((event.currentTarget.elements.namedItem('multiSelect') as HTMLSelectElement).selectedOptions).map(option => option.value),
    };

    try {
      const response = await fetch('http://localhost:3000/user/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Form submitted successfully:', result);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Form Elements" />
      <form onSubmit={handleSubmit}>

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Input Fields
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Default Input
                </label>
                <input
                  type="text"
                  placeholder="Default Input"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Active Input
                </label>
                <input
                  type="text"
                  placeholder="Active Input"
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                />
              </div>

              <div>
                <label className="mb-3 block font-medium text-black dark:text-white">
                  Disabled label
                </label>
                <input
                  type="text"
                  placeholder="Disabled label"
                  disabled
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"
                />
              </div>
            </div>
          </div>

          {/* <!-- Toggle switch input --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Toggle switch input
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <SwitcherOne />
              <SwitcherTwo />
              <SwitcherThree />
              <SwitcherFour />
            </div>
          </div>

          {/* <!-- Time and date --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Time and date
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <DatePickerOne />
              <DatePickerTwo />
            </div>
          </div>

          {/* <!-- File upload --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                File upload
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Attach file
                </label>
                <input
                  type="file"
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Attach file
                </label>
                <input
                  type="file"
                  className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-9">
          {/* <!-- Textarea Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Textarea Fields
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Default textarea
                </label>
                <textarea
                  rows={6}
                  placeholder="Default textarea"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                ></textarea>
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Active textarea
                </label>
                <textarea
                  rows={6}
                  placeholder="Active textarea"
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                ></textarea>
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Disabled textarea
                </label>
                <textarea
                  rows={6}
                  disabled
                  placeholder="Disabled textarea"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"
                ></textarea>
              </div>
            </div>
          </div>

          {/* <!-- Checkbox and radio --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Checkbox and radio
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <CheckboxOne />
              <CheckboxTwo />
              <CheckboxThree />
              <CheckboxFour />
              <CheckboxFive />
            </div>
          </div>

          {/* <!-- Select input --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Select input
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <SelectGroupTwo />
              <MultiSelect id="multiSelect" />
            </div>
          </div>
        </div>
      </div>
      <button type="submit">Submit</button>
      </form>
    </DefaultLayout>
  );
};

export default FormElements;
