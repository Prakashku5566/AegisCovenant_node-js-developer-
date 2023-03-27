const { createWorker }= require('tesseract.js');

const worker = createWorker({
      // logger: m => console.log(m)
    });


const getcaptcha = async (req,res) => {
  try {
    
    const {url} = req.body;
    if(!url)return res.status(400).send({status:false,message:"the image link is required for the parsing the data"});

    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
   
    await worker.setParameters({
      tessedit_char_whitelist: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    });
    const { data: { text } } = await worker.recognize(url);
    // const x= await worker.recognize(url);

   
    console.log(text)
   if(text.length==0)return res.status(400).send({status:false,message:"this image cannot readable by script"})
    await worker.terminate();
    return res.send({data:text})
  } catch (error) {
    console.log(error)
  }
  }


module.exports = {getcaptcha}