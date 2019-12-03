/**
   * @remarks
   * Do not use for over 10,000 IDs
   * @returns Random ID
   */
function SemiRandomId (): string {
  return `_${Math.random().toString(36).substr(2, 9)}`;
}

export {
  SemiRandomId,
};
