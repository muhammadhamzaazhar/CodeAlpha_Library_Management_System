import User from "../models/User.js";

export const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!userId) {
      return res.status(400).json({ message: "User ID is required." });
    }

    const user = await User.findById(userId)
      .populate("activeTransactions")
      .populate("prevTransactions");
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    console.error("Error fetching user details:", err.message);

    return res.status(500).json({
      message:
        "An error occurred while retrieving the user details. Please try again later.",
      error: err.message,
    });
  }
};

export const allMembers = async (req, res) => {
  try {
    const users = await User.find({})
      .populate("activeTransactions")
      .populate("prevTransactions")
      .sort({ _id: -1 });
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No members found." });
    }

    res.status(200).json(users);
  } catch (err) {
    console.error("Error retrieving members:", err.message);

    return res.status(500).json({
      message:
        "An error occurred while retrieving the members. Please try again later.",
      error: err.message,
    });
  }
};

export const updateUser = async (req, res) => {
  const { userId, isAdmin } = req.body;
  const { id } = req.params;

  if (userId !== id && !isAdmin) {
    return res
      .status(403)
      .json({ message: "You can only update your own account!" });
  }

  if (req.body.password) {
    try {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    } catch (err) {
      console.error("Error hashing password:", err.message);

      return res.status(500).json({
        message:
          "An error occurred while updating the password. Please try again later.",
        error: err.message,
      });
    }
  }

  try {
    const user = await User.findByIdAndUpdate(id, {
      $set: req.body,
    });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json("Account has been updated");
  } catch (err) {
    console.error("Error updating account:", err.message);

    return res.status(500).json({
      message:
        "An error occurred while updating the account. Please try again later.",
      error: err.message,
    });
  }
};

/* Adding transaction to active transactions list */
export const addTransactionToActiveTransaction = async (req, res) => {
  const { isAdmin, userId } = req.body;
  const transactionId = req.params.id;

  if (!isAdmin) {
    return res
      .status(403)
      .json({ message: "Only Admin can add a transaction." });
  }

  try {
    if (!userId || !transactionId) {
      return res
        .status(400)
        .json({ message: "User ID and Transaction ID are required." });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    await user.updateOne({ $push: { activeTransactions: transactionId } });
    res.status(200).json({
      message: "Transaction added to active transactions successfully.",
    });
  } catch (err) {
    console.error(
      "Error adding transaction to active transactions:",
      err.message
    );

    return res.status(500).json({
      message:
        "An error occurred while adding the transaction to active transactions. Please try again later.",
      error: err.message,
    });
  }
};

export const addTransactionToPreviousTransaction = async (req, res) => {
  const { isAdmin, userId } = req.body;
  const transactionId = req.params.id;

  if (!isAdmin) {
    return res
      .status(403)
      .json({ message: "Only Admin can perform this action." });
  }

  try {
    if (!userId || !transactionId) {
      return res
        .status(400)
        .json({ message: "User ID and Transaction ID are required." });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    await user.updateOne({ $pull: { activeTransactions: transactionId } });
    await user.updateOne({ $push: { prevTransactions: transactionId } });
    res.status(200).json({
      message: "Transaction moved to previous transactions successfully.",
    });
  } catch (err) {
    console.error("Error updating transaction:", err.message);

    return res.status(500).json({
      message:
        "An error occurred while updating the transaction. Please try again later.",
      error: err.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  const { userId, isAdmin } = req.body;
  const targetUserId = req.params.id;

  if (userId !== targetUserId && !isAdmin) {
    return res
      .status(403)
      .json({ message: "You can delete only your account!" });
  }

  try {
    const user = await User.findById(targetUserId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({ message: "Account has been deleted successfully." });
  } catch (err) {
    console.error("Error deleting user:", err.message);

    return res.status(500).json({
      message:
        "An error occurred while deleting the account. Please try again later.",
      error: err.message,
    });
  }
};
