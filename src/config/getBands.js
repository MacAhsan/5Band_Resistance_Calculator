export default {
  bandOptions: [
    { value: 0, tolerance: 0, color: "black", label: "None" },
    { value: 1, tolerance: 1, color: "brown", label: "Brown"},
    { value: 2, tolerance: 2, color: "red", label: "Red"},
    { value: 3, color: "orange", label: "Orange"},
    { value: 4, color: "yellow", label: "Yellow"},
    { value: 5, tolerance: 0.5, color: "green", label: "Green"},
    { value: 6, tolerance: 0.25, color: "blue", label: "Blue"},
    { value: 7, tolerance: 0.10, color: "violet", label: "Violet"},
    { value: 8, tolerance: 0.05, color: "grey", label: "Grey"},
    { value: 9, color: "white", label: "White"},
    { value: 10, tolerance: 5, color: "#FFD700", label: "Gold"},
    { value: 11, tolerance: 10, color: "#C0C0C0", label: "Silver"}
  ],
  bands: [
    { omitOptions: [10,11] },
    { omitOptions: [10,11] },
    { omitOptions: [10,11] },
    { omitOptions: [8,9] },
    { omitOptions: [3,4,9] }
  ]
}
