import { utils } from "ethers";

export function generateHDNode(mnemonic: string, accountIndex: number): utils.HDNode {
    const path = `m/44'/60'/${accountIndex}'/0/0`;
    return utils.HDNode.fromMnemonic(mnemonic).derivePath(path)
}

export function generateHDNodeAddress(mnemonic: string, accountIndex: number): string {
    return generateHDNode(mnemonic, accountIndex).address
}