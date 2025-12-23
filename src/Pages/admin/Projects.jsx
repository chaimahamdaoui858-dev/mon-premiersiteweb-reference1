/*import { useEffect, useState } from 'react';

export default function AdminProjects() {
  const [projects,setProjects] = useState([]);
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');

  const fetchProjects = async () => {
    const res = await fetch('http://localhost:5000/projects');
    setProjects(await res.json());
  };

  const addProject = async () => {
    await fetch('http://localhost:5000/projects',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({title,description})
    });
    setTitle(''); setDescription(''); fetchProjects();
  };

  const deleteProject = async (id) => {
    await fetch(`http://localhost:5000/projects/${id}`,{method:'DELETE'});
    fetchProjects();
  };

  useEffect(()=>{fetchProjects();},[]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Gestion des Projets</h1>
      <div className="mb-4 flex gap-2">
        <input placeholder="Titre" value={title} onChange={e=>setTitle(e.target.value)} className="border px-2 py-1 rounded"/>
        <input placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} className="border px-2 py-1 rounded"/>
        <button onClick={addProject} className="bg-blue-600 text-white px-3 rounded">Ajouter</button>
      </div>
      <ul>
        {projects.map(p=>(
          <li key={p.id} className="flex justify-between bg-white p-3 rounded shadow mb-2">
            <span>{p.title} - {p.description}</span>
            <button onClick={()=>deleteProject(p.id)} className="bg-red-500 text-white px-2 rounded">Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
*/