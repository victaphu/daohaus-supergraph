// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class MolochV1Template extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("MolochV1Template", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "MolochV1Template",
      [address.toHex()],
      context
    );
  }
}

export class MolochV2Template extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("MolochV2Template", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "MolochV2Template",
      [address.toHex()],
      context
    );
  }
}

export class MolochV21Template extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("MolochV21Template", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "MolochV21Template",
      [address.toHex()],
      context
    );
  }
}
