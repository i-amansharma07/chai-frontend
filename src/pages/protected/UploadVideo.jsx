import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { uploadVideo } from "../../services/api/video";
import Button from "../../components/ui/Button";
import toast from "react-hot-toast";

const UploadVideo = () => {
  const [videoFile, setVideoFile] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoFile(file);
    } else {
      setVideoFile(null);
    }
  };

  async function onVideoSubmit(data) {
    const formData = new FormData()
    formData.append("videoFile", videoFile)

    const res = await uploadVideo(formData)
    if(res?.success){
        toast.success('Video Uploaded Successfully')
        setVideoFile(null)
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit(onVideoSubmit)}>
        <div className="flex flex-col gap-5">
          <label>Select a video</label>
          <input
            {...register("videoFile",{
                required: "video file is required",
              })}
            type="file"
            onChange={handleVideoChange}
            accept="video/*"
          />
          {videoFile && (
            <div>
              <h2>Preview:</h2>
              <video controls className="w-[300px] h-[200px]">
                <source
                  src={URL.createObjectURL(videoFile)}
                  type={videoFile.type}
                />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          <Button type="submit" isSubmitting={isSubmitting}>
                Submit 
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UploadVideo;
