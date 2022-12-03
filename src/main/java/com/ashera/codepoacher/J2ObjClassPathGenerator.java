package com.ashera.codepoacher;

import com.ashera.codegen.J2ObjcPrefixCodeGen;

public class J2ObjClassPathGenerator {
	public static void main(String[] args) throws Exception {
		String projectBaseDir = System.getProperty("baseDir");
		if (projectBaseDir == null) {
			throw new RuntimeException("Please define system -DbaseDir=XX");
		}

		J2ObjcPrefixCodeGen.generateClassPathFile(projectBaseDir, args);
	}
}
