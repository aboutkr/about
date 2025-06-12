import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { supabase } from '../../utils/supabaseClient';

interface Content {
  id: string;
  title: string;
  date: string;
  description: string;
  poster_url: string;
  photos: string[];
  filename: string;
  created_at: string;
}

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const [contents, setContents] = useState<Content[]>([]);
  const [editing, setEditing] = useState<Content | null>(null);
  const [editPhotoFiles, setEditPhotoFiles] = useState<FileList | null>(null);
  const [editPosterFile, setEditPosterFile] = useState<File | null>(null);
  const [fileInputKey, setFileInputKey] = useState(Date.now()); // 파일 input 강제 리셋용


  const [newContent, setNewContent] = useState<Omit<Content, 'id' | 'created_at'>>({
    title: '',
    date: '',
    description: '',
    poster_url: '',
    filename: '',
    photos: [],
  });
  const [posterFile, setPosterFile] = useState<File | null>(null);
  const [photoFiles, setPhotoFiles] = useState<FileList | null>(null);
  const [activeTab, setActiveTab] = useState<'upload' | 'manage'>('upload');
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('logged_in') === 'true';
    setIsLoggedIn(loggedIn);
    if (loggedIn) fetchContents();
  }, []);

  const fetchContents = async () => {
    const { data, error } = await supabase.from('contents').select('*');
    if (error) console.error(error);
    else setContents(data);
  };

  const handleLogout = () => {
    localStorage.removeItem('logged_in');
    navigate('/Admin/login');
  };

const uploadFile = async (folder: string, fileName: string, file: File): Promise<string | null> => {
  const path = `${folder}/${fileName}`;

  // 기존 파일 제거 (실패해도 무시)
  await supabase.storage.from('content-images').remove([path]);

  // 새 파일 업로드
  const { error } = await supabase.storage.from('content-images').upload(path, file);
  if (error) {
    console.error('파일 업로드 실패:', error);
    return null;
  }

  const { data } = supabase.storage.from('content-images').getPublicUrl(path);
  return data.publicUrl;
};


const handleCreate = async () => {
  if (!newContent.title || !posterFile || !newContent.date) {
    alert('제목, 날짜, 포스터는 필수입니다.');
    return;
  }

  const baseFileName = newContent.filename.trim() || newContent.title.trim().replace(/\s+/g, '-');

  const posterExt = posterFile.name.substring(posterFile.name.lastIndexOf('.'));
  const posterFileName = `${baseFileName}${posterExt}`;
  const posterUrl = await uploadFile('posters', posterFileName, posterFile);
  if (!posterUrl) {
    alert('포스터 업로드 실패');
    return;
  }

  const photoUrls: string[] = [];
  if (photoFiles) {
    for (let i = 0; i < photoFiles.length; i++) {
      const file = photoFiles[i];
      const ext = file.name.substring(file.name.lastIndexOf('.'));
      const photoFileName = `${baseFileName}-${i + 1}${ext}`;
      const url = await uploadFile('photos', photoFileName, file);
      if (url) photoUrls.push(url);
    }
  }

  const { error } = await supabase.from('contents').insert({
    title: newContent.title,
    date: new Date(newContent.date).toISOString(),
    description: newContent.description,
    poster_url: posterUrl,
    photos: photoUrls,
    filename: baseFileName,
  });

  if (!error) {
    alert('저장되었습니다!');  // 저장 알람
    setNewContent({ title: '', date: '', description: '', poster_url: '', filename: '', photos: [] });
    setPosterFile(null);
    setPhotoFiles(null);
    setFileInputKey(Date.now()); 
    fetchContents();
  } else {
    console.error('콘텐츠 저장 실패:', error);
  }
};


const handleUpdate = async () => {
  if (!editing) return;

  let updatedPosterUrl = editing.poster_url;

  // 새 포스터 업로드
  if (editPosterFile) {
    const posterExt = editPosterFile.name.substring(editPosterFile.name.lastIndexOf('.'));
    const posterFileName = `${editing.filename.trim() || editing.title.trim().replace(/\s+/g, '-')}${posterExt}`;
    const newPosterUrl = await uploadFile('posters', posterFileName, editPosterFile);
    if (newPosterUrl) {
      updatedPosterUrl = newPosterUrl;
    } else {
      alert('포스터 업로드 실패');
      return;
    }
  }

  // 갤러리 사진 업로드
  const updatedPhotos = [...editing.photos];
  if (editPhotoFiles) {
    const baseFileName = editing.filename.trim() || editing.title.trim().replace(/\s+/g, '-');
    for (let i = 0; i < editPhotoFiles.length; i++) {
      const file = editPhotoFiles[i];
      const ext = file.name.substring(file.name.lastIndexOf('.'));
      const photoFileName = `${baseFileName}-${updatedPhotos.length + i + 1}${ext}`;
      const url = await uploadFile('photos', photoFileName, file);
      if (url) updatedPhotos.push(url);
    }
  }

  const { error } = await supabase
    .from('contents')
    .update({
      title: editing.title,
      date: editing.date,
      description: editing.description,
      poster_url: updatedPosterUrl,
      filename: editing.filename,
      photos: updatedPhotos,
    })
    .eq('id', editing.id);

  if (!error) {
    setEditing(null);
    setEditPosterFile(null);
    setEditPhotoFiles(null);
    fetchContents();
  }
};


  const handleDelete = async (id: string) => {
    const { error } = await supabase.from('contents').delete().eq('id', id);
    if (!error) fetchContents();
  };


  if (isLoggedIn === null) return <div>Loading...</div>;
  if (!isLoggedIn) return <Navigate to="/Admin/login" />;

  return (
    <section className="pt-20 px-4 sm:px-10 md:px-16 lg:px-20 bg-Abeige w-full flex flex-col items-center py-10">
      <div className="w-full max-w-4xl bg-white rounded-[16px] flex flex-col" style={{ boxShadow: '6px 6px 0 0 black' }}>
        <div className="h-12 bg-Ablue rounded-t-[16px] flex items-center px-6 gap-3 shrink-0">
          <span className="w-4 h-4 bg-red-500 rounded-full"></span>
          <span className="w-4 h-4 bg-yellow-400 rounded-full"></span>
          <span className="w-4 h-4 bg-green-500 rounded-full"></span>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-extrabold italic">[ Dashboard ]</h2>
            <button onClick={handleLogout} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-Ablue">로그아웃</button>
          </div>

          <div className="flex gap-4 mb-6">
            <button onClick={() => setActiveTab('upload')} className={`py-2 px-4 rounded-md font-semibold ${activeTab === 'upload' ? 'bg-Ablue text-white' : 'bg-gray-200'}`}>추가</button>
            <button onClick={() => setActiveTab('manage')} className={`py-2 px-4 rounded-md font-semibold ${activeTab === 'manage' ? 'bg-Ablue text-white' : 'bg-gray-200'}`}>수정/삭제</button>
          </div>

          {activeTab === 'upload' && (
            <div className="mb-6">
              <h3 className="font-bold mb-2">새 콘텐츠 추가</h3>
              <input
                className="w-full p-2 border mb-2"
                placeholder="제목"
                value={newContent.title}
                onChange={(e) => setNewContent({ ...newContent, title: e.target.value })}
              />
              <input
                className="w-full p-2 border mb-2"
                type="date"
                value={newContent.date}
                onChange={(e) => setNewContent({ ...newContent, date: e.target.value })}
              />
              <textarea
                className="w-full p-2 border mb-2 h-32"
                placeholder="설명"
                value={newContent.description}
                onChange={(e) => setNewContent({ ...newContent, description: e.target.value })}
              />
              <input
                className="w-full p-2 border mb-2"
                placeholder="파일명 (확장자 제외)"
                value={newContent.filename}
                onChange={(e) => setNewContent({ ...newContent, filename: e.target.value })}
              />
              <div className='font-bold'>포스터</div>
              <input
                key={`poster-${fileInputKey}`}
                className="w-full p-2 border mb-2"
                type="file"
                accept="image/*"
                onChange={(e) => setPosterFile(e.target.files?.[0] || null)}
              />
              <div className='font-bold'>갤러리</div>
              <input
                key={`gallery-${fileInputKey}`}
                className="w-full p-2 border mb-2"
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => setPhotoFiles(e.target.files)}
              />
              <button
                className="bg-white border hover:bg-Aorange hover:text-white text-black font-semibold py-2 px-6 rounded-[16px] shadow-md"
                style={{ boxShadow: '6px 6px 0 0 black' }}
                onClick={handleCreate}
              >
                저장
              </button>
            </div>
          )}

          {activeTab === 'manage' && contents.map((content) => (
            <div key={content.id} className="bg-white p-6 mb-4 rounded shadow border border-gray-300">
              {editing?.id === content.id ? (
                <>
                  <input
                    className="w-full p-2 border mb-2"
                    value={editing.title}
                    onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                  />
                  <input
                    className="w-full p-2 border mb-2"
                    type="date"
                    value={editing.date.slice(0, 10)}
                    onChange={(e) => setEditing({ ...editing, date: e.target.value })}
                  />
                  <textarea
                    className="w-full p-2 border mb-2 h-32"
                    value={editing.description}
                    onChange={(e) => setEditing({ ...editing, description: e.target.value })}
                  />
                  <input
                    className="w-full p-2 border mb-2"
                    placeholder="파일명 (확장자 제외)"
                    value={editing.filename}
                    onChange={(e) => setEditing({ ...editing, filename: e.target.value })}
                  />
                  <input
                    className="w-full p-2 border mb-2"
                    value={editing.poster_url}
                    onChange={(e) => setEditing({ ...editing, poster_url: e.target.value })}
                  />

                  <div className="mb-2">
                    <div className="mb-1 font-semibold">현재 포스터:</div>
                    <img src={editing.poster_url} alt="poster" className="w-32 rounded mb-2" />
                    <input
                        className="w-full p-2 border"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setEditPosterFile(e.target.files?.[0] || null)}
                    />
                    </div>

                {/* 🖼️ 이미지 미리보기 및 삭제 */}
                <div className="mb-4">
                <label className="font-semibold block mb-1">갤러리 이미지</label>
                <div className="flex flex-wrap gap-2">
                    {editing.photos.map((url, index) => (
                    <div key={index} className="relative w-24 h-24">
                        <img
                        src={url}
                        alt={`photo-${index}`}
                        className="w-full h-full object-cover rounded border"
                        />
                        <button
                        onClick={() => {
                            const updatedPhotos = editing.photos.filter((_, i) => i !== index);
                            setEditing({ ...editing, photos: updatedPhotos });
                        }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
                        >
                        ×
                        </button>
                    </div>      
                    ))}
                </div>
                </div>

                    <input
                    className="w-full p-2 border mb-4"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => setEditPhotoFiles(e.target.files)}
                    />

                  <button onClick={handleUpdate} className="bg-green-500 text-white px-4 py-2 rounded mr-2">저장</button>
                  <button onClick={() => {
                    setEditing(null);
                    setEditPhotoFiles(null);
                    setEditPosterFile(null);
                    }} className="bg-gray-300 px-4 py-2 rounded">취소</button>
                </>
              ) : (
                <>
                  <h3 className="text-xl font-bold">{content.title}</h3>
                  <p>{new Date(content.date).toLocaleDateString()}</p>
                  <p>{content.description}</p>
                  <img src={content.poster_url} alt="poster" className="w-40 mt-2 rounded" />
                  <div className="mt-2 flex gap-2">
                    <button onClick={() => setEditing(content)} className="bg-blue-500 text-white px-4 py-2 rounded">수정</button>
                    <button onClick={() => handleDelete(content.id)} className="bg-red-500 text-white px-4 py-2 rounded">삭제</button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

