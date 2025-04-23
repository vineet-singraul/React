import { useState } from 'react';

const StudentResult = () => {
  const [formData, setFormData] = useState({
    physics: '',
    chemistry: '',
    maths: '',
    english: '',
    hindi: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateResult = (e) => {
    e.preventDefault();
    
    const { physics, chemistry, maths, english, hindi } = formData;
    const marks = [physics, chemistry, maths, english, hindi].map(Number);
    
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const percentage = (total / 500) * 100;
    
    let division;
    if (percentage >= 60) {
      division = 'First Division';
    } else if (percentage >= 45) {
      division = 'Second Division';
    } else if (percentage >= 33) {
      division = 'Third Division';
    } else {
      division = 'Fail';
    }
    
    const resultMessage = `
      Physics: ${physics}
      Chemistry: ${chemistry}
      Maths: ${maths}
      English: ${english}
      Hindi: ${hindi}
      ------------------
      Total Marks: ${total}/500
      Percentage: ${percentage.toFixed(2)}%
      Division: ${division}
    `;
    
    alert(resultMessage);
  };

  return (
    <>
      <center>
        <h1>Student Result</h1>
        <form onSubmit={calculateResult} style={{ width: '300px', textAlign: 'left' }}>

          <div>
            <label>Physics:</label>
            <input 
              type="number" 
              name="physics" 
              value={formData.physics} 
              onChange={handleChange} 
              min="0" 
              max="100" 
              required 
            />
          </div>
          <div>
            <label>Chemistry:</label>
            <input 
              type="number" 
              name="chemistry" 
              value={formData.chemistry} 
              onChange={handleChange} 
              min="0" 
              max="100" 
              required 
            />
          </div>
          <div>
            <label>Maths:</label>
            <input 
              type="number" 
              name="maths" 
              value={formData.maths} 
              onChange={handleChange} 
              min="0" 
              max="100" 
              required 
            />
          </div>
          <div>
            <label>English:</label>
            <input 
              type="number" 
              name="english" 
              value={formData.english} 
              onChange={handleChange} 
              min="0" 
              max="100" 
              required 
            />
          </div>
          <div>
            <label>Hindi:</label>
            <input 
              type="number" 
              name="hindi" 
              value={formData.hindi} 
              onChange={handleChange} 
              min="0" 
              max="100" 
              required 
            />
          </div>
          <button type="submit" style={{ marginTop: '10px' }}>Calculate Result</button>
        </form>
      </center>
    </>
  );
};

export default StudentResult;