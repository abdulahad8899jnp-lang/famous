// src/components/TeamCard.jsx

export default function TeamCard({
  member,
  setSelectedMember,
}) {
  return (
    <div className="bg-black p-4 rounded-xl border border-gray-800 text-center">

      <img
        src={member.image}
        alt={member.name}
        className="w-24 h-24 mx-auto rounded-full object-cover mb-3"
      />

      <h3 className="text-white font-semibold">
        {member.name}
      </h3>

      <p className="text-gray-400 text-sm mb-4">
        {member.role}
      </p>

      <button
        onClick={() => setSelectedMember(member)}
        className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition"
      >
        View Details
      </button>

    </div>
  );
}