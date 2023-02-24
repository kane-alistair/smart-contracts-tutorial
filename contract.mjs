const restrictedData = [
  "password",
  "credit card number",
  "social security number",
];

function validateBlock(block) {
  const blockData = block.data;
  for (let i = 0; i < restrictedData.length; i++) {
    if (blockData.includes(restrictedData[i])) {
      throw new Error(`Block contains restricted data: ${restrictedData[i]}`);
    }
  }
  // add any other contract validation logic here
  // likely to be much more advanced and complex than this in reality!
}

export default validateBlock;
