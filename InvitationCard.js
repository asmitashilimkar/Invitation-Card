import React from "react";

export default function InvitationCard() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-orange-100 to-yellow-200">
      <div className="w-[28rem] p-6 text-center bg-white rounded-2xl shadow-xl">
        
       
        <h1 className="text-3xl font-extrabold text-orange-700 mb-4 drop-shadow-lg">
          🙏 आगमन आपल्या बाप्पाचं 🙏
        </h1>

      
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzM0iS7DxIX2ClR31aC3wJrz87QlmwPZ2DYQHFDbWNYaCtS6dZfSkipMuF1HjWo-vE_SQ&usqp=CAU"
          alt="Ganpati Bappa"
          className="max-w-[200px] mx-auto my-4 rounded-lg shadow-lg"
        //    style={{ maxWidth: "250px", margin: "20px 0" }}
        />

      
        <p className="text-gray-700 text-lg font-medium leading-relaxed">
          गणपती बाप्पा मोरया, मंगलमुर्ती मोरया 🥹🧿! <br />
          "श्री गणेशा आपल्या घरी आनंद आणि समृद्धी घेऊन येवो"
        </p>
      </div>
    </div>
  );
}
