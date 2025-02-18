const EmailForm = ({ photo }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email envoyé à : ${email} avec la photo : ${photo}`);
  };

  return (
    <form className="email-form" onSubmit={handleSubmit}>
      <img src={photo} alt="Aperçu" className="photo-preview" />
      <input
        type="email"
        placeholder="Entrez votre email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">📩 Recevoir la photo</button>
    </form>
  );
};

export default EmailForm;
