import React from 'react';

const TopicForm = ({ setFile, setSubTopic, setSubTopicDescription, setPricing, setTopicNumber, setFullPrice }) => {
  function getFile(event) {
    if (event.target.files && event.target.files[0]) {
      setFile(URL.createObjectURL(event.target.files[0]));
    }
  }
 

  return (
    <div className="max-w-md p-6 mx-auto text-white bg-[#191F5C] rounded-lg shadow-lg float-right xl:mr-[60px] lg:mr-[40px] md:mr-[20px]">
      <h2 className="mb-4 text-xl font-semibold">Information and Communication Technology Sub Topic 01.5</h2>
      <form>
        <div className="mb-4">
          <input type='file' onChange={getFile} className="px-4 py-2 text-[#191F5C] bg-white rounded hover:bg-gray-200" />
        </div>
        <div className="mb-4">
          <label htmlFor="subTopicTitle" className="block mb-1 text-sm font-medium">Sub Topic Title</label>
          <input
            type="text"
            id="subTopicTitle"
            onChange={(e)=> setSubTopic(e.target.value)}
            className="w-full px-3 py-2 text-black border border-gray-300 rounded-md"
            placeholder="Please type your text for editing"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subTopicDescription" className="block mb-1 text-sm font-medium">Sub Topic Description</label>
          <input
            type="text"
            id="subTopicDescription"
            onChange={(e)=> setSubTopicDescription(e.target.value)}
            className="w-full px-3 py-2 text-black border border-gray-300 rounded-md"
            placeholder="Please type your text for editing"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subTopicDescription" className="block mb-1 text-sm font-medium">Topic Number</label>
          <input
            type="number"
            id="topicNumber"
            onChange={(e)=> setTopicNumber(e.target.value)}
            className="w-full px-3 py-2 text-black border border-gray-300 rounded-md"
            placeholder="Please type your text for editing"
          />
        </div>



        
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Pricing</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="pricing"
                value="free"
                onChange={(e)=> setPricing(e.target.value)}
                className="mr-2"
              />
              Free
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="pricing"
                value="paid"
                onChange={(e) => setPricing(e.target.value)}
                className="mr-2"
              />
              Paid
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="lessonPrice" className="block mb-1 text-sm font-medium">Full Lesson Price</label>
          <input
            type="text"
            id="lessonPrice"
            onChange={(e) => setFullPrice(e.target.value)}
            className="w-full px-3 py-2 text-black border border-gray-300 rounded-md"
            placeholder="Please type your text for editing"
          />
        </div>
      </form>
    </div>
  );
};

export default TopicForm;
